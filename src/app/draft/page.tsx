'use client';
import PopupSelect from "@/components/plan/create/PopupSelect";

 
export default function Page() {
  return (
    // <PopupSelect />
    <Container>
      <div>hehe</div>
    </Container>
  );
}

const obj = {
  id: 1,
  name: "ho duc trung"
}

function Container({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Person info={obj} />
    </div>
  )
}

function Person({
  info
}: {
    info: {
    id: number;
    name: string;
  }
}) {
  return (
    <div>
      Id: {info.id}
      Name: {info.name}
    </div>
  )
}