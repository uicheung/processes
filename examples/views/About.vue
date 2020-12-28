<template>
  <div class="join">
    <img class="top-img" src="@/assets/t.png" alt />
    <article class="middile">
      <aside>
        <img ref="asideImg" class="asideImg" src="@/assets/l.png" alt />
      </aside>
      <!-- <video width="100%" height="35%" controls autoplay>
        <source
          src="http://www.talkweb.com.cn/activity-manager/file/2020/08/21/wu_1eg86anqfviee77iiv1d0ismh5/wu_1eg86anqfviee77iiv1d0ismh5.mp4"
          type="video/mp4"
        />您的浏览器不支持该视频播放
        <object data="img/small.mp4" width="90%" height="240">
          <embed src="movie.swf" width="90%" height="240" />
        </object>
      </video>-->

      <div  class="video">
        <video  ref="video" width="100%" autoplay controls >
          <source
            src="http://www.talkweb.com.cn/activity-manager/file/2020/08/21/wu_1eg86anqfviee77iiv1d0ismh5/wu_1eg86anqfviee77iiv1d0ismh5.mp4"
            type="video/mp4"
          />您的浏览器不支持该视频播放
          <object data="img/small.mp4">
            <embed src="movie.swf" />
          </object>
        </video>
      </div>

      <aside>
        <img ref="asideImg" class="asideImg" src="@/assets/r.png" alt />
      </aside>
    </article>
    <img class="bottom-img" src="@/assets/b.png" alt />
  </div>
</template>

<script>
export default {
  mounted() {
    let video = this.$refs.video;
    console.log(video);

    let he = video.offsetHeight + 'px';
    console.log(he);


    let imgArr = document.querySelectorAll(".asideImg");
    console.log(imgArr);
    for (let index = 0; index < imgArr.length; index++) {
        imgArr[index].style.height=he
      
    }

  }
};
</script>>



<style lang="css" scoped>
.join {
  width: 100%;
  overflow: hidden;
  font-size: 0;
}
.top-img,
.bottom-img {
  width: 100%;
}
.middile {
  display: flex;
}
.video {
  flex: 1;
  background-color: #;
}
</style>
