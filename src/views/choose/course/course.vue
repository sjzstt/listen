<template>
    <div class="course-wrapper">
      <div class="slider-box">
        <swiper :options="swiperOptionIn" class="swiper-position">
            <swiper-slide v-for='(item,index) in slider' :key='index'>
              <img class="recommand-swiper-img"  :src="item">
            </swiper-slide>
            <div class="swiper-pagination-white swiper-pagination-position" slot="pagination"></div>
       </swiper>
       <div class="search-box">
         <div class="search">
            <i class="iconfont icon-juanzeng"></i>
            <input type="text" class="search-txt" placeholder="搜索老师/课程">
            <i class="iconfont icon-shezhi"></i>
          </div>
       </div>
      </div>
      <scroll :scrollX="true" :scrollY="false" class="scroll">
        <ul class="course-list">
          <li><router-link to="all">全部</router-link></li>
          <li><router-link to="chinese">语文</router-link></li>
          <li><router-link to="math">数学</router-link></li>
          <li><router-link to="english">英语</router-link></li>
          <li><router-link to="history">历史</router-link></li>
          <li><router-link to="physical">物理</router-link></li>
          <li><router-link to="artical">艺术</router-link></li>
        </ul>
      </scroll>
      <router-view></router-view>
    </div>
</template>

<script>
 import 'swiper/dist/css/swiper.css';
 import {swiper, swiperSlide} from 'vue-awesome-swiper';
export default {
  name:"course",
  data(){
    return {
      slider:[
          "../../../../static/img/slide1.jpg",
          "../../../../static/img/slide3.jpg",
          "../../../../static/img/slide4.jpg",
          "../../../../static/img/slide5.jpg",
          "../../../../static/img/slide6.jpg",
          "../../../../static/img/slide7.jpg",
          "../../../../static/img/slide8.jpg"
      ],
      swiperOptionIn: {
          pagination: '.swiper-pagination-white',
          paginationClickable: true,
          autoplay: 3000,
          loop:true,
          speed:300,
          autoplayDisableOnInteraction:false
      }, 
    }
  },
  components:{
    swiper, 
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
   .course-wrapper{
     .slider-box{
       position:relative;
       height:220px;
        .swiper-position {
          position: relative;
          height:220px;
          .recommand-swiper-img {
              width: 100%;
              height:100%;
              display: block;
          }
          .swiper-pagination-position {
              position: absolute;
              bottom:50px;
              z-index: 1;
              display: flex;
              flex-direction: row;
              justify-content: center;
          }
        }
        .search-box{
          position:absolute;
          left:0;
          bottom:0px;
          width:100%;
          height:45px;
          background:rgba(0,0,0,0.3);
          z-index:1;
          .search{
            width:80%;
            height:28px;
            background: #fff;
            margin:7px auto 0;
            border-radius:10px;
            position: relative;
            .icon-juanzeng{
              position:absolute;
              top:3px;
              left:8px;
              font-size:20px;
            }
            .search-txt{
              position:absolute;
              left:35px;
              top:0;
              width:200px;
              height:28px;
              font-size:12px;
              text-indent:1em;
              border:none;
              outline:none
            }
            .icon-shezhi{
              position:absolute;
              font-size:20px;
              right:5px;
              top:2px;
            }
          }
        }
     }
     .scroll{
       width:100%;
       height:30px;
       overflow:hidden;
       .course-list{
        font-size:14px;
        width:600px;
        height:30px;
        line-height:30px;
        li{
          float: left;
          width:100px;
          text-align:center;
          a{
            color:#666;
          }
          a.router-link-active{
            color:#000;
          }
        }
      }
     }
     .course-list{
        font-size:14px;
        width:600px;
        height:30px;
        line-height:30px;
        li{
          float: left;
          width:100px;
          a{
            color:#666;
          }
          a.router-link-exact-active{
            color:#000;
          }
        }
     }
   }
</style>
