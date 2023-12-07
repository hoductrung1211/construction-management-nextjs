'use client';
 
export default function Page() {

  function allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  function drag(event: DragEvent) {
    event.dataTransfer?.setData("text", event?.target?.id);
  }

  function drop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer?.getData("text");
    event.target.
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center gap-10">
      <div
        id="div1"
        className="w-80 h-20 border-2">

      </div>

      <div
        className="w-40 h-16 rounded-md border-2 bg-apple-gray"
        draggable
        onDragStart={e => e.preventDefault()}
      >

      </div>
    </div>
  )
}