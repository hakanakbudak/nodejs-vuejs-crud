
import { RouterLink } from 'vue-router';

<template>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="http://localhost:8080">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png" 
                    width="36"
                    height="50">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <strong class="navbar-item">Vue.js CRUD API</strong>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <RouterLink to="/create" class="button is-dark">
                            <strong>Create</strong>
                        </RouterLink>
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


  
<style lang="scss"></style>
  