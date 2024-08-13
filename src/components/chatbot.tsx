// @/components/Chatbot.tsx
'use client'
import { useState } from 'react';
import React from "react";
import { Check } from "lucide-react";
import Image from 'next/image';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 hover:scale-105">
        <Image
          src="/chatbot-icon.png"
          alt="Chatbot Icon"
          width={64}
          height={64}
        />      </button>


      {/* <button onClick={toggleChatbot} className="absolute top-2 right-2 text-gray-500">
            ✕
          </button> */}

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-[331px] h-[620px]">
          <div className="inline-flex flex-col h-[620px] items-start justify-between relative">
            <header className="flex flex-col w-[330.67px] items-start gap-[8.27px] bg-transparent h-[72.75px] relative">
              <div className="self-stretch w-full bg-[#397eff] rounded-[16.53px_16.53px_0px_0px] shadow-[0px_19.84px_28.11px_#ae090973] h-[72.75px] relative" />
              <div className="flex w-[291px] h-[35px] items-center justify-between absolute top-5 left-5">
                <div className="inline-flex items-center gap-[7.44px] relative flex-[0_0_auto] mt-[-2.48px] mb-[-2.48px]">
                  <div className="relative w-[39.69px] h-[39.68px] rounded-[44.09px] bg-[url(/chatbot-icon.png)] bg-[100%_100%]" />

                  <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                    <div className="relative w-[97.55px] h-[23.97px]">
                      <div className="absolute -top-px left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[19.8px] tracking-[0] leading-[normal]">
                        WappGPT
                      </div>
                    </div>
                    <div className="relative w-[38.03px] h-[12.4px]">
                      <div className="absolute -top-px left-2 [font-family:'Inter-Regular',Helvetica] font-normal text-[#43ee7d] text-[9.9px] tracking-[0] leading-[normal]">
                        Online
                      </div>
                      <div className="absolute w-[7px] h-[7px] top-1 left-0 bg-[#43ee7d] rounded-[3.31px]" />
                    </div>
                  </div>
                </div>
                <button onClick={toggleChatbot} className="relative w-[19.84px] h-[19.84px  ">x</button>

              </div>
            </header>
            <div className="flex flex-col w-[330.67px] items-center justify-end gap-[19.84px] p-[19.84px] relative flex-1 grow bg-[#f8f9fa] overflow-y-scroll">
              <div className="flex flex-col items-end justify-end gap-[5.79px] pl-[16.53px] pr-[9.92px] pt-0 pb-[33.07px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[238.91px] items-start justify-end gap-[8.27px] pl-[16.53px] pr-[13.23px] pt-[13.23px] pb-[26.45px] relative flex-[0_0_auto] bg-[#dee2e6] rounded-[9.92px_9.92px_0px_9.92px] shadow-[0px_0.83px_0.83px_#00000033]">
                  <div className="flex items-end justify-end gap-[8.27px] relative flex-1 grow">
                    <p className="relative flex-1 mt-[-0.83px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#444444] text-[12.4px] tracking-[0] leading-[normal]">
                      Minimum text check, Hide check icon
                    </p>
                  </div>
                  <Image
  className="absolute w-[37px] h-7 top-[75px] left-[202px]"
  alt="Rectangle"
  src="/profile.png"
  width={37}
  height={28}  // Assuming height of 7rem translates to 28px
/>                </div>
                <div className="inline-flex items-end absolute top-[77px] left-[55px]">
                  <div className="relative w-[16.53px] h-[5.79px]">
                    <div className="absolute -top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#888888] text-[8.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                      7:20
                    </div>
                  </div>
                </div>
                <Check className="h-4 w-4" />
              </div>
              <div className="flex flex-col items-start justify-end gap-[5.79px] pt-0 pb-[16.53px] px-[16.53px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-end gap-[8.27px] pl-[16.53px] pr-[13.23px] pt-[13.23px] pb-[26.45px] relative self-stretch w-full flex-[0_0_auto] bg-[#397eff] rounded-[9.92px_9.92px_9.92px_0px] shadow-[0px_1.65px_0.83px_#0000000d]">
                  <div className="flex items-end justify-end gap-[8.27px] relative flex-1 grow">
                    <p className="relative flex-1 mt-[-0.83px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[12.4px] tracking-[0] leading-[normal]">
                      Rapidly build stunning Web Apps with Frest 🚀
                      <br />
                      Developer friendly, Highly customizable &amp; Carefully crafted HTML Admin Dashboard Template.
                    </p>
                  </div>
                  <div className="gap-[8.27px] top-[124px] left-[26px] inline-flex items-end absolute">
                    <div className="relative w-[16.53px] h-[5.79px]">
                      <div className="absolute -top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#888888] text-[8.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                        7:20
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[5.79px] px-[16.53px] py-0 absolute top-[104px] left-[185px]">
                  <div className="inline-flex items-start gap-[6.61px] p-[3.31px] relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#397eff] rounded-[6.61px] border border-solid border-white">
                  <Image
  className="relative"
  alt="Vuesax outline"
  src="/clipboard-text.svg"
  width={13.23}
  height={13.23}
/>                  <Image
  className="relative"
  alt="Vuesax linear like"
  src="/like.svg"
  width={13.23}
  height={13.23}
/>
<Image
  className="relative"
  alt="Vuesax linear"
  src="/dislike.svg"
  width={13.23}
  height={13.23}
/>                  </div>
                </div>
                <div className="absolute w-10 h-10 top-[115px] left-0 bg-[#397eff] rounded-[82.67px]">
                <Image
  className="absolute top-1.5 left-[7px]"
  alt="Wapp GPT logo"
  src="/chatbot-icon.png"
  width={27}
  height={27}
/>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end gap-[5.79px] pl-[16.53px] pr-[9.92px] pt-0 pb-[33.07px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-[238.91px] items-start justify-end gap-[8.27px] pl-[16.53px] pr-[13.23px] pt-[13.23px] pb-[26.45px] relative flex-[0_0_auto] bg-[#dee2e6] rounded-[9.92px_9.92px_0px_9.92px] shadow-[0px_0.83px_0.83px_#00000033]">
                  <div className="flex items-end justify-end gap-[8.27px] relative flex-1 grow">
                    <p className="relative flex-1 mt-[-0.83px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#444444] text-[12.4px] tracking-[0] leading-[normal]">
                      More no. of lines text and showing complete list of features like time stamp + check icon READ
                    </p>
                  </div>
                  <Image
  className="absolute w-[37px] h-7 top-[75px] left-[202px]"
  alt="Rectangle"
  src="/profile.png"
  width={37}
  height={28}  // Assuming height of 7rem translates to 28px
/>                </div>
                <div className="top-[93px] left-[55px] inline-flex items-end absolute">
                  <div className="relative w-[16.53px] h-[5.79px]">
                    <div className="absolute -top-px left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#888888] text-[8.3px] tracking-[0] leading-[normal] whitespace-nowrap">
                      7:20
                    </div>
                  </div>
                </div>
                <Check className="h-4 w-4" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[4.96px] p-[13.23px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[0px_0px_16.53px_16.53px] shadow-[0px_-3.31px_13.23px_#00000014]">
              <div className="flex items-start gap-[6.61px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-1 grow items-center gap-[8.27px] px-[13.23px] py-[4.96px] relative bg-[#f3f5f6] rounded-[8.27px] shadow-[0px_0.83px_0px_#0000001f]">
                  <div className="relative w-fit mt-[-0.83px] opacity-90 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#444444] text-[9.9px] tracking-[0] leading-[normal]">
                    🤔 What is WappGPT?
                  </div>
                </div>
                <div className="inline-flex flex-[0_0_auto] items-center gap-[8.27px] px-[13.23px] py-[4.96px] relative bg-[#f3f5f6] rounded-[8.27px] shadow-[0px_0.83px_0px_#0000001f]">
                  <div className="relative w-fit mt-[-0.83px] opacity-90 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#444444] text-[9.9px] tracking-[0] leading-[normal]">
                    💰 Pricing
                  </div>
                </div>
                <div className="inline-flex flex-[0_0_auto] items-center gap-[8.27px] px-[13.23px] py-[4.96px] relative bg-[#f3f5f6] rounded-[8.27px] shadow-[0px_0.83px_0px_#0000001f]">
                  <div className="relative w-fit mt-[-0.83px] opacity-90 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#444444] text-[9.9px] tracking-[0] leading-[normal]">
                    🙋‍♂️ FAQs
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-[62px] px-[18.19px] py-[16.53px] relative self-stretch w-full flex-[0_0_auto] bg-[#e8ebf0] rounded-[13.23px] overflow-hidden border-t-[0.83px] [border-top-style:solid] border-[#f3f5f6]">
                <div className="relative w-fit mt-[-0.83px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#444444] text-[14.9px] tracking-[0] leading-[normal]">
                  Type your message here...
                </div>
                <Image
  className="relative"
  alt="Vuesax linear send-icon"
  src="/send-icon.svg"
  width={19.84}
  height={19.84}
/>              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

