function Card() {
  return (
    <div class="container m-6">
      <a
        href="#"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Astro Project with Tailwind and React
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          This a starter Astro Project with tailwind and{' '}
        </p>
      </a>
    </div>
  );
}

export default Card;
