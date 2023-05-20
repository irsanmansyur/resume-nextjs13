import Scroll from "@/components/layout/scroll";

export default function Contact() {
  return (
    <section className="pt-20 space-y-10 h-screen container">
      <h1 className="title text-5xl font-semibold text-center pt-10">
        Contact <span className="text-primary"> Me!</span>
      </h1>
      <form className="max-w-4xl mx-auto space-y-5 py-10">
        <div className="flex gap-2">
          <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden ">
            <input
              type="text"
              name="full_name"
              id="full_name"
              className="peer block w-full bg-transparent border-0 p-0 text-base placeholder-gray-400 focus:ring-0 focus:outline-none  z-[2]"
              placeholder="Full Name"
            />
            <label className="block transform text-xs font-bold uppercase text-slate-50 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">
              Full Name
            </label>
            <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
          </div>
          <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full bg-transparent border-0 p-0 text-base placeholder-gray-400 focus:ring-0 focus:outline-none z-[2]"
              placeholder="@Email"
            />
            <label className="block transform text-xs font-bold uppercase text-slate-50 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">
              Email
            </label>
            <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
          </div>
        </div>
        <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden">
          <input
            type="text"
            name="subject"
            id="subject"
            className="peer block w-full bg-transparent border-0 p-0 text-base placeholder-gray-400 focus:ring-0 focus:outline-none z-[3]"
            placeholder="Subject Email"
          />
          <label className="block transform text-xs font-bold uppercase text-slate-50 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">
            Subject
          </label>
          <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
        </div>

        <div className="border-primary w-full flex min-h-[60px] flex-col-reverse justify-center rounded-md border  px-3 py-2 shadow-sm focus-within:shadow-inner relative overflow-hidden">
          <textarea
            name="message"
            id="message"
            className="peer block w-full bg-transparent border-0 p-0 text-base placeholder-gray-400 focus:ring-0 focus:outline-none z-[3]"
            placeholder="your message"
            rows={6}
          />
          <label className="block transform text-xs font-bold uppercase text-slate-50 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">
            Message
          </label>
          <div className="absolute inset-0 bg-primary bg-opacity-20 z-[1]  duration-300 -translate-x-full peer-valid:translate-x-0 peer-focus:translate-x-0" />
        </div>
        <div className="flex justify-center">
          <button className="tracking-widest bg-transparent relative border-2 border-primary rounded p-2  font-bold z-[1] overflow-hidden before:transition before:duration-500 before:w-full before:translate-x-0 before:hover:-translate-x-full before:z-[-1] before:absolute  before:top-0 before:left-0 before:h-full before:bg-primary px-10">
            Submit
          </button>
        </div>
      </form>
      <Scroll back="/skill" />
    </section>
  );
}
