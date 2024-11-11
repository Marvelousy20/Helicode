import Image from "next/image";

export default function Partners() {
  return (
    <div className="text-center pt-20 lg:pt-[6.5rem] max-w-[56rem] mx-auto">
      <h1 className="lg:text-[3rem] text-[1.875rem] font-semibold">Partners</h1>

      <div className="flex items-center justify-between mt-9">
        <div>
          <a href="https://aiesec.org/" target="_blank">
            <Image src="/aie.png" alt="aie" width={234} height={48} />
          </a>
        </div>

        <div>
          <a
            href="https://open.spotify.com/show/5PPcZF8wzYC43uPkYvUbIQ?si=Q5MlDkjtSk2q7tMvoyZF_w"
            target="_blank"
          >
            <Image src="/monocast.png" alt="monocast" width={193} height={62} />
          </a>
        </div>

        <div>
          <a href="https://3vo.me/" target="_blank">
            <Image src="/3vo.png" alt="3vo" width={168} height={48} />
          </a>
        </div>

        <div>
          <a href="https://coinsub.io/" target="_blank">
            <Image src="/coinsub.svg" alt="3vo" width={168} height={48} />
          </a>
        </div>
      </div>
    </div>
  );
}
