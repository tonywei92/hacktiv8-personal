<template>
  <div class="w-full flex flex-wrap">
    <div class="w-full md:w-1/2 p-1">
      <canvas ref="canv" class="w-full" />
      <input type="file" name="image" @change="onImageChoosen" />
    </div>
    <div class="w-full md:w-1/2 p-1">
      <div class="form">
        <BaseInput title="Top Text" id="top-text" v-model="topText" @input="onTextChange" />
        <BaseInput title="Bottom Text" id="bottom-text" v-model="bottomText" @input="onTextChange" />
        <BaseButton>Upload</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { fabric } from "fabric";
export default {
  data() {
    return {
      imageUrl: null,
      canvas: null,
      imageRef: null,
      topTextObj: null,
      bottomTextObj: null,
      topText: "Top Text",
      bottomText: "Bottom Text"
    };
  },
  methods: {
    onImageChoosen(e) {
      if (e.target.files.length) {
        this.setImageToCanvas(window.URL.createObjectURL(e.target.files[0]));
      }
    },
    onTextChange(e) {
      this.setTopTextObj(this.topText);
      this.setBottomTextObj(this.bottomText);
    },
    setImageToCanvas(url, callback) {
      fabric.Image.fromURL(url, oImg => {
        this.canvas.remove(this.imageRef);
        oImg.scaleToWidth(this.canvas.getWidth());
        this.canvas.setHeight(oImg.height * oImg.scaleX);
        this.imageRef = oImg;
        this.canvas.add(this.imageRef);
        this.canvas.sendToBack(this.imageRef);
        this.imageRef.lockMovementX = true;
        this.imageRef.lockMovementY = true;
        this.canvas.setBackgroundImage(this.imageRef);
        if (callback) {
          callback(oImg);
        }
        this.canvas.remove(this.imageRef);
        this.canvas.bringToFront(this.bottomTextObj);
        this.canvas.bringToFront(this.topTextObj);
      });
    },
    setTopTextObj(text) {
      this.canvas.remove(this.topTextObj);
      this.topTextObj = new fabric.Text(text.toUpperCase(), {
        fontFamily: "Impact",
        stroke: "#000",
        strokeWidth: 2,
        fill: "white"
      });
      this.canvas.add(this.topTextObj);
      this.topTextObj.top = 10;
      this.topTextObj.left =
        this.canvas.getWidth() / 2 - this.topTextObj.width / 2;
      this.canvas.sendToBack(this.imageRef);
    },
    setBottomTextObj(text) {
      this.canvas.remove(this.bottomTextObj);
      this.bottomTextObj = new fabric.Text(text.toUpperCase(), {
        fontFamily: "Impact",
        stroke: "#000",
        strokeWidth: 2,
        fill: "white"
      });
      this.canvas.add(this.bottomTextObj);
      this.bottomTextObj.top =
        this.canvas.getHeight() - this.bottomTextObj.height - 10;
      this.bottomTextObj.left =
        this.canvas.getWidth() / 2 - this.bottomTextObj.width / 2;
      this.canvas.sendToBack(this.imageRef);
    }
  },
  mounted() {
    const canv = this.$refs.canv;
    this.canvas = new fabric.Canvas(canv);
    this.canvas.setWidth(300);
    this.canvas.setHeight(200);
    this.setImageToCanvas(
      "https://via.placeholder.com/320x240/eee/808080/?text=Meme%20Generator",
      () => {
        this.setTopTextObj(this.topText);
        this.setBottomTextObj(this.bottomText);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
</style>