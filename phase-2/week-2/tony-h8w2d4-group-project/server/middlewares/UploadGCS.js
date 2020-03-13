const GOOGLE_CLOUD_PROJECT = process.env['GOOGLE_CLOUD_PROJECT'];
const CLOUD_BUCKET = GOOGLE_CLOUD_PROJECT + '_bucket';

// [START bookshelf_cloud_storage_client]
const Storage = require('@google-cloud/storage');

const storage = Storage();
const bucket = storage.bucket(CLOUD_BUCKET);

function getPublicUrl(filename) {
    return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}


function sendUploadToGCS(req, res, next) {
    if (!req.file) {
        return next();
    }

    const gcsname = Date.now() + req.file.originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype,
        },
        resumable: false,
    });

    stream.on('error', err => {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', async () => {
        req.file.cloudStorageObject = gcsname;
        await file.makePublic();
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        next();
    });

    stream.end(req.file.buffer);
}