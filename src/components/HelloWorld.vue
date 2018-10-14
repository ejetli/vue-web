<template>
  <div class="container">
    <div class="head">
        <header class="row">
          <div class="col-md-9 mt-3">         
           <h3>Logo</h3>
          </div>
           <div class="col-md-3 mt-2">
             <p>+23767666666</p>
             <p>test@gmail.com</p>
           </div>
        </header>
    </div>

          <div class="row">
            <div class="col-md-12">
              <hr>
            </div>
          </div>

       <!-- navbar -->
<nav class="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul class="navbar-nav pad">
                <li class="nav-item active">
                    <router-link v-bind:to="'/'" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-bind:to="'/about' "class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-bind:to="'/contact'" class="nav-link">Contact</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav><!--end navbar-->

          <div class="row">
            <div class="col-md-12">
              <hr>
            </div>
          </div>   

      <div class="image">
              <img src="../assets/Computerlab.jpg">
      </div>
      <div class="row">
        
          <p class="col-md-6 first load">       
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aperiam est et eius tempore recusandae obcaecati dolores officiis unde vitae laborum veniam quibusdam debitis saepe, repellat, nemo dolore, iure accusantium.      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aperiam est et eius tempore recusandae obcaecati dolores officiis unde vitae laborum veniam quibusdam debitis saepe, repellat, nemo dolore, iure accusantium.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aperiam est et eius tempore recusandae obcaecati dolores officiis unde vitae laborum veniam quibusdam debitis saepe, repellat, nemo dolore, iure accusantium.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aperiam est et eius tempore recusandae obcaecati dolores officiis unde vitae laborum veniam quibusdam debitis saepe, repellat, nemo dolore, iure accusantium.
          </p>

         <div class="col-md-6 sidebar" >
              <h4 class="">Sidbar</h4>
                    <div class="row">
                      <div class="col-md-12">
                        <hr>
                      </div>
                    </div>
                    <form class="review-form" @submit.prevent="onSubmit">
                      <p class="i1">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name"v-model="name">
                      </p>
                      <p class="i2">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email"v-model="email">
                      </p>
                      <p class="i3">
                        <label for="message">Message</label>
                        <textarea id="message" class="form-control" v-model="message"></textarea> 
                      </p>
                      <p class="submit">
                        <input class="btn btn-primary" type="submit" value="Submit">
                      </p>
                    </form>
          </div> 

    </div>
   
<br>
<hr>
    <div class="row">
    <div class="col-md-12">
    <footer class="jumbotron fimage text-light" >
      @Copyright 2018
    </footer>   
    </div> 
  </div>


  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:'null',
      email:'null',
      message:'null'  
    }
  },
   methods: {
      onSubmit() {
        let messageReview = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        this.$emit('message-submitted')
        this.name = null
        this.email = null
        this.message = null
      }
  }
}
</script>

<style scoped>

 .pad,.nav-item{
    padding:0px 48px 0px 50px !important;
  }
  

  .image img {
    width: 100%;
    margin: 0 0 10px 0;

  }

  .first{
    width:65%;
  }



  .sidebar {
    padding:15px 50px;
    background:#EBEBEB;
  }

  .sidebar .i1, .i2, .i3{
    margin: 0px;
    padding: 9px;
    font-weight: bold;
  }
  .sidebar input, textarea{
    width: 100%;
    margin:6px 0px 8px 0px;
    padding:20px 0px 0 0
}

.sidebar input[type="submit"]
{
    border: none;
    outline: none;
    height: 40px;
    background: #1c8adb;
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
}
.sidebar input[type="submit"]:hover
{
    cursor: pointer;
    background: #39dc79;
    color: #000;
}

   .submit{
    margin:0px 90px 0px;
  }
  footer{
    
    background:#2A95FF; 
 
  }
  footer, .fimage{
    background-size: cover;
        background-attachment: fixed;
    background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(../assets/lab-21.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('../assets/lab-21.jpg'); 
  }

  .jumbotron{
    padding-top:150px ;
    height:500px;
  }
</style>
