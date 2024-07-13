import Typography from "@/components/ui/typography";
import React from "react";
import { BsSlack } from "react-icons/bs";

const AuthPage = () => {
  return (
    <div className='min-h-screen  p-5 grid text-center place-content-center text-white'>
      <div className='max-w-[450px]'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <BsSlack size={30} />
          <Typography
            text='Sign in to Slack Clone'
            variant='h2'
            className='mb-3'
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
