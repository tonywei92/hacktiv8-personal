# Livedebug (120 menit)

## Server

ubah `env-template` menjadi `.env`

sebelum menjalankan test ubah config file dan isi dengan credentials server kamu
setelah di ubah makan jalankan `npm run initdb` script tersebut untuk membuat database yang sesuai dengan config dan melakukan migration.

```bash
#isi dari command `npm run initdb`
sequelize db:create --env=test && sequelize db:migrate --env=test
```

Good Luck..!

## Client

jangan lupa untuk

```bash
json-server db.json
```
