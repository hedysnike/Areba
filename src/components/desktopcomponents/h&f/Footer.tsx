import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <div className="w-5/6 ml-auto mr-auto text-[#464646] flex items-center border-t border-solid border-black">
      <div className="text-xs ml-auto mr-auto w-[20%]">Areba © 2023</div>
      <div className="flex justify-end ml-auto mr-auto w-[60%]">
        <a href="https://www.facebook.com/areba.geo" target="_blank" rel="noreferrer">
          <div className="hover:bg-[#F3F3F2] p-3">
            <Icon icon="ic:baseline-facebook" color="#464646" width="30" height="30" />
          </div>
        </a>
        <a href="https://www.instagram.com/areba.ge/" target="_blank" rel="noreferrer">
          <div className="hover:bg-[#F3F3F2] p-3">
            <Icon icon="ph:instagram-logo" color="#464646" width="30" height="30" />
          </div>
        </a>
        <a href="https://www.youtube.com/channel/UC9UGuPiC8m4h1PSjQbpBqNg" target="_blank" rel="noreferrer">
          <div className="hover:bg-[#F3F3F2] p-3">
            <Icon icon="mdi:youtube" color="#464646" width="30" height="30" />
          </div>
        </a>
      </div>
    </div>
  );
}
