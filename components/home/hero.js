import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          사람과 기술을 연결하는 개발자 아잠입니다!
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          안녕하세요! 기술로 세상을 더 나은 방향으로 변화시키고자 노력하는
          프론트엔드 개발자 아잠입니다. 주어진 업무는 끝까지 책임지고 완수하며,
          결과에 대한 책임감을 중요시합니다. 프로젝트 과정에서 팀원들의 장점을
          배우고, 함께 성장하는 것을 목표로 합니다. 팀의 성공을 위해 필요한 일을
          적극적으로 찾아 해결하며 협력을 중시합니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">View project</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
