// Card Component

function Card(props) {
  return (
    <div className="container m-6">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.children}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.footer}
        </p>
      </a>
    </div>
  );
}

export default Card;
