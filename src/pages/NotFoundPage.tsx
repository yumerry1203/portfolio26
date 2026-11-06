import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <main className="flex min-h-svh items-center justify-center bg-white px-20 py-60 text-black">
    <section className="text-center">
      <p className="font-bricolage text-7xl font-medium leading-none sm:text-8xl">
        404
      </p>
      <h1 className="mt-16 font-heading text-2xl font-bold sm:text-3xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-12 font-body text-sm leading-relaxed text-gray-dark sm:text-base">
        요청한 주소가 변경되었거나 존재하지 않습니다.
      </p>

      <Link
        to="/"
        className="mt-28 inline-flex min-h-44 items-center justify-center rounded-sm bg-black px-24 font-body text-sm font-bold text-white transition-opacity duration-200 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        홈으로 돌아가기
      </Link>
    </section>
  </main>
);

export default NotFoundPage;
