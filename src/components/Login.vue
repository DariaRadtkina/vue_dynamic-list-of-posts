<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getUserInfo } from '../api/user';
import { useUserStore } from '../stores/userStore';

const userEmail = ref('');
const errorMessage = ref(null);
const router = useRouter();
const userStore = useUserStore();

async function handleSubmit() {
  try {
    const userData = await getUserInfo(userEmail.value);
    userStore.setUser(userData[0])
    router.push('/');
  } catch (error) {
    errorMessage.value = 'Error fetching user: ' + error.message;
  }
}
</script>

<template>
  <section class="container is-flex is-justify-content-center">
    <form @submit.prevent="handleSubmit" class="box mt-5">
      <h1 class="title is-3">You need to register"</h1>

      <div class="field">
        <label class="label" htmlFor="user-email"> Email </label>

        <div class="control has-icons-left">
          <input
            type="email"
            id="user-email"
            name="email"
            class="input"
            v-model="userEmail"
            placeholder="Enter your email"
            required
          />

          <span class="icon is-small is-left">
            <font-awesome-icon :icon="['fas', 'fa-envelope']" />
          </span>
        </div>

        <p class="help is-danger">{{ errorMessage }}</p>
      </div>

      <div class="field">
        <button type="submit" class="button is-primary">Login</button>
      </div>
    </form>
  </section>
</template>
