'use client';
import IconButton from "@/components/IconButton";

 
export default function Page() {
  return (
    <div className="flex p-4">
      <main className="w-full flex flex-col gap-10">
        <section className="h-screen bg-gray-700"/>
        <section className="h-screen bg-gray-700"/>
        
        <main className="flex gap-10">
          <section className="flex-grow bg-gray-200">
            <div className="h-screen flex flex-col">
              <header className="sticky top-0 h-10 bg-sky-500">1</header>
            </div>
            <div className="h-screen">
              <header className="sticky top-0 h-10 bg-sky-500">2</header>
            </div>
            <div className="h-screen">
              <header className="sticky top-0 h-10 bg-sky-500">3</header>
            </div>
            <div className="h-screen">
              <header className="sticky top-0 h-10 bg-sky-500">4</header>
            </div>
          </section>
          <section className="flex flex-col gap-10">
            <div className="sticky top-10 flex flex-col gap-10">
              <IconButton name="user" />
              <IconButton name="user" />
            </div>
            <div className="sticky top-80 flex flex-col gap-10">
              <IconButton name="user" />
              <IconButton name="user" />
            </div>
          </section>
        </main>
      </main> 
    </div>
  );
}