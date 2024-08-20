<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/vue3";
import { ref, onMounted } from "vue";

const randomUser = ref({});
const posts = ref([]);
const loading = ref(false);
const seconds = ref(0);
defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
  laravelVersion: {
    type: String,
    required: true,
  },
  phpVersion: {
    type: String,
    required: true,
  },
  randomUser: {
    type: Object,
    required: true,
  },
  posts: {
    type: Array,
    required: true,
  },
});
onMounted(async () => {
  // Fetch random user with posts from the backend
  const response = await axios.get("/random-user-with-posts");
  randomUser.value = response.data.randomUser;
  posts.value = response.data.posts;
});
const fetchRandomUserWithPosts = async (seconds) => {
  // Show spinner while loading
  loading.value = true;

  try {
    // Simulate server delay (remove this in production)
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));

    // Make an asynchronous request to fetch a random user with posts using Axios
    const response = await axios.get("/random-user-with-posts");
    console.log(response);

    // Update the randomUser and posts props with the response data
    randomUser.value = response.data.randomUser;
    posts.value = response.data.posts;
  } catch (error) {
    console.error("Error fetching random user with posts:", error);
  } finally {
    // Hide spinner after loading
    loading.value = false;
  }
};
</script>


<template>
  <Head title="Welcome" />

  <div
    class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-gray-900 bg-[url('@/img/test.svg')] selection:bg-red-500 selection:text-white"
  >
    <div v-if="canLogin" class="p-6 text-right sm:fixed sm:top-0 sm:right-0">
      <Link
        v-if="$page.props.auth.user"
        :href="route('dashboard')"
        class="font-semibold text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >Dashboard</Link
      >

      <template v-else>
        <Link
          :href="route('login')"
          class="font-semibold text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >Log in</Link
        >
      </template>
    </div>

    <div class="p-6 mx-auto max-w-7xl lg:p-8">
      <div class="flex justify-center">
        <Link href="/">
          <ApplicationLogo class="w-40 h-40 text-red-600" />
        </Link>
      </div>

      <div class="">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          <div
            class="flex p-6 transition-all scale-100 rounded-lg shadow-2xl h-44 bg-gray-800/50 backdrop-blur-sm bg-gradient-to-bl from-gray-700/50 via-transparentring-1 ring-inset ring-white/5 shadow-gray-500/20 dark:shadow-none duration-250 focus:outline focus:outline-2 focus:outline-red-500"
          >
            <div class="flex flex-col justify-between w-full gap-4">
              <div>
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Response Time
                </h2>

                <p
                  class="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400"
                >
                  Click one of the buttons to simulate long response times.
                </p>
              </div>
              <div
                class="flex flex-row flex-wrap justify-between w-full gap-4 mt-4"
              >
                <div>
                  <PrimaryButton
                    v-bind:class="
                      loading
                        ? 'bg-gray-600  outline-none ring-2 ring-indigo-500 ring-offset-2'
                        : 'bg-gray-800'
                    "
                    @click="fetchRandomUserWithPosts(15)"
                    ><p>15 seconds</p></PrimaryButton
                  >
                </div>
                <div>
                  <PrimaryButton
                    v-bind:class="
                      loading
                        ? 'bg-gray-600  outline-none ring-2 ring-indigo-500 ring-offset-2'
                        : 'bg-gray-800'
                    "
                    @click="fetchRandomUserWithPosts(30)"
                    ><p>30 seconds</p></PrimaryButton
                  >
                </div>
                <div>
                  <PrimaryButton
                    v-bind:class="
                      loading
                        ? 'bg-gray-600  outline-none ring-2 ring-indigo-500 ring-offset-2'
                        : 'bg-gray-800'
                    "
                    @click="fetchRandomUserWithPosts(90)"
                    ><p>90 seconds</p></PrimaryButton
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex p-6 transition-all scale-100 rounded-lg shadow-2xl h-80 bg-gray-800/50 bg-gradient-to-bl backdrop-blur-sm from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 shadow-gray-500/20 dark:shadow-none duration-250 focus:outline focus:outline-2 focus:outline-red-500"
          >
            <div class="flex flex-col justify-between w-full gap-4">
              <div>
                <h2 class="text-xl font-semibold text-white">
                  Database Response:
                </h2>
                <!-- Conditional Rendering for Spinner -->
                <template v-if="loading">
                  <!-- Spinner -->
                  <div
                    class="flex flex-col items-center justify-center text-white"
                  >
                    <svg
                      class="transition-all duration-200 h-44 animate-spin"
                      viewBox="0 0 800 800"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.2"
                        cx="400"
                        cy="400"
                        fill="none"
                        r="200"
                        stroke-width="50"
                        stroke="#dc2626"
                        stroke-dasharray="700 1400"
                        stroke-linecap="round"
                        stroke-dashoffset="0"
                      />
                    </svg>

                    <p>Loading...</p>
                  </div>
                </template>
                <template v-else>
                  <div class="flex flex-col justify-between">
                    <div>
                      <h4
                        v
                        v-if="randomUser.name"
                        class="mt-4 leading-relaxed text-gray-200"
                      >
                        {{ randomUser.name }}
                      </h4>
                      <p class="leading-relaxed text-gray-400">
                        {{ randomUser.email }}
                      </p>
                    </div>
                    <div class="mt-12">
                      <p class="text-sm leading-relaxed text-gray-200">
                        Posts:
                      </p>
                      <ul>
                        <li v-for="post in posts" :key="post.id">
                          <p class="text-sm leading-relaxed text-gray-400">
                            {{ post.title }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <a
            href="#"
            class="scale-100 p-6 bg-gray-800/50 dark:bg-gradient-to-bl backdrop-blur-sm from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
          >
            <div>
              <div
                class="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 dark:bg-red-800/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="w-7 h-7 stroke-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
              </div>

              <h2 class="mt-6 text-xl font-semibold text-white">
                Laravel News
              </h2>

              <p class="mt-4 text-sm leading-relaxed text-gray-400">
                Laravel News is a community driven portal and newsletter
                aggregating all of the latest and most important news in the
                Laravel ecosystem, including new package releases and tutorials.
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="self-center w-6 h-6 mx-6 shrink-0 stroke-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </a>

          <div
            class="scale-100 p-6 bg-gray-800/50 dark:bg-gradient-to-bl backdrop-blur-sm from-gray-700/50 via-transparent ring-1 ring-inset ring-white/5 rounded-lg shadow-gray-500/20 shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
          >
            <div>
              <div
                class="flex items-center justify-center w-16 h-16 rounded-full bg-red-800/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="w-7 h-7 stroke-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>
              </div>

              <h2 class="mt-6 text-xl font-semibold text-white">
                Vibrant Ecosystem
              </h2>

              <p class="mt-4 text-sm leading-relaxed text-gray-400">
                Laravel's robust library of first-party tools and libraries,
                such as
                <a
                  href="#"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Forge</a
                >,
                <a
                  href="https://vapor.laravel.com"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Vapor</a
                >,
                <a
                  href="https://nova.laravel.com"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Nova</a
                >, and
                <a
                  href="https://envoyer.io"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Envoyer</a
                >
                help you take your projects to the next level. Pair them with
                powerful open source libraries like
                <a
                  href="https://laravel.com/docs/billing"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Cashier</a
                >,
                <a
                  href="https://laravel.com/docs/dusk"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Dusk</a
                >,
                <a
                  href="https://laravel.com/docs/broadcasting"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Echo</a
                >,
                <a
                  href="https://laravel.com/docs/horizon"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Horizon</a
                >,
                <a
                  href="https://laravel.com/docs/sanctum"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Sanctum</a
                >,
                <a
                  href="https://laravel.com/docs/telescope"
                  class="underline hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  >Telescope</a
                >, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-center px-6 mt-16 sm:items-center sm:justify-between"
      ></div>

      <div class="ml-4 text-sm text-center text-gray-400 sm:text-right sm:ml-0">
        Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
      </div>
    </div>
  </div>
</template>

<style>
.bg-dots-lighter {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E");
}
</style>
