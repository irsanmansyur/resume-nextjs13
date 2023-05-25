'use client';
import { InputErrorMessage } from '@/components/forms';
import { Prisma } from '@prisma/client';
import axios from 'axios';
import { useState } from 'react';
import Lottie from 'lottie-react';
import congratulationAnimate from '../../animations/congratulations.json';
export const FormContactPage = () => {
  const [successSend, setSuccessSend] = useState<string | null>();
  const [errors, setErrors] = useState<Record<string, any>>({});
  const [data, setData] = useState<Prisma.QuestionsCreateInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    axios
      .post('/api/question', data)
      .then(() => {
        setData({ name: '', email: '', subject: '', message: '' });
        setSuccessSend('Terimakasih telah menghubungi !');
      })
      .catch((err) => {
        const { response } = err;
        if (response && response['data']['errors']) setErrors(response['data']['errors']);
      });
  };

  return (
    <form className="max-w-4xl mx-auto space-y-5 py-10 relative" onSubmit={handleSubmit}>
      {successSend ? <div className="text-center font-bold text-primary text-2xl">{successSend}</div> : ''}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        {successSend ? (
          <Lottie
            animationData={congratulationAnimate}
            onLoopComplete={() => {
              setSuccessSend(null);
            }}
          />
        ) : (
          ''
        )}
      </div>
      <div className="flex gap-2">
        <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden ">
          <InputErrorMessage error={errors.name} />
          <input
            type="text"
            name="full_name"
            id="full_name"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            className="peer block w-full bg-transparent border-0 p-0 placeholder-gray-400 focus:ring-0 focus:outline-none  z-[2]"
            placeholder="Full Name"
          />
          <label className="block transform text-xs font-bold uppercase  transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Full Name</label>
          <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
        </div>
        <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden">
          <InputErrorMessage error={errors.email} />
          <input
            type="email"
            name="email"
            value={data.email}
            id="email"
            className="peer block w-full bg-transparent border-0 p-0  placeholder-gray-400 focus:ring-0 focus:outline-none z-[2]"
            placeholder="@Email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <label className="block transform text-xs font-bold uppercase  transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Email</label>
          <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
        </div>
      </div>
      <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden">
        <InputErrorMessage error={errors.subject} />
        <input
          type="text"
          name="subject"
          id="subject"
          value={data.subject}
          className="peer block w-full bg-transparent border-0 p-0  placeholder-gray-400 focus:ring-0 focus:outline-none z-[3]"
          placeholder="Subject "
          onChange={(e) => {
            setData({ ...data, subject: e.target.value });
          }}
        />
        <label className="block transform text-xs font-bold uppercase  transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Subject</label>
        <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
      </div>
      <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden">
        <InputErrorMessage error={errors.message} />
        <textarea
          name="message"
          id="message"
          value={data.message}
          className="peer block w-full bg-transparent border-0 p-0  placeholder-gray-400 focus:ring-0 focus:outline-none z-[3]"
          placeholder="your message"
          rows={6}
          onChange={(e) => {
            setData({ ...data, message: e.target.value });
          }}
        />
        <label className="block transform text-xs font-bold uppercase  transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Message</label>
        <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="tracking-widest  relative border-2 border-primary rounded p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:translate-x-0 before:hover:-translate-x-full before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary px-10 hover:text-primary text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default FormContactPage;
