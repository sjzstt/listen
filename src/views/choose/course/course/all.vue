<template>
    <div class="all-container">
      <ul class="all-box">
        <li>
          <div class="all-item">
            <p class="name"><span class="course">英</span><span class="title">高二英语直播班专区</span></p>
            <p class="counts">共15期课程可选</p>
          </div>
          <div class="price-box">
              <p class="price"><span>&yen;</span>560<span>起</span></p>
              <p class="people">7744人已购买</p>
          </div>
        </li>
         <li>
          <div class="all-item">
            <p class="name"><span class="course">英</span><span class="title">高二英语直播班专区</span></p>
            <p class="counts">共15期课程可选</p>
          </div>
          <div class="price-box">
              <p class="price"><span>&yen;</span>560<span>起</span></p>
              <p class="people">7744人已购买</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name:"all"
}
</script>

<style lang="scss" scoped>
  .all-container{
    .all-box{
      padding:10px 15px;
      // background: #f80;
      li{
        display:flex;
        flex-direction: row;
        height:80px;
        margin-bottom:10px;
        border-bottom:1px solid #ddd;
        padding-bottom:10px;
        justify-content: space-between;
        .all-item{
          display: flex;
          flex-direction: column;
          justify-content:space-between;
           .name{
             .course{
               display: inline-block;
               width:15px;
               height:15px;
               margin-right:10px;
               border:1px solid red;
               text-align:center;
               line-height:15px;
               font-size:12px;
               vertical-align: middle;
             }
             .title{
               font-size:14px;
               color:#000;
               vertical-align: middle;
             }
           }
        }
        .price-box{
          width:30%;
          height:40px;
          text-align:right;
          // background: white;
          margin-top: 40px;
          .price{
            font-size:20px;
            color:#f00;
            span{
              font-size:14px;
              margin:0 3px;
            }
          }
          .people{
            font-size:12px;
          }
        }
      }
    }
  }
</style>
