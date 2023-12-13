'use client';
import Icon from "@/components/Icon";
import React, { DragEvent, useState } from "react"

export default function Dnd() {
    const [items, setItems] = useState<{
        id: string | null;
        text: string;
    }[]>([
        { id: "Cake", text: "🍰 Cake"},
        { id: "Donut", text: "🍩 Donut"},
        { id: "Apple", text: "🍎 Apple"},
        { id: "Pizza", text: "🍕 Pizza"},
    ]);

    const [draggedItem, setDraggedItem] = useState<{
        id: string,
        text: string
    } | null>(null);

    function onDragStart(event: DragEvent<HTMLSpanElement>, index: number) {
        setDraggedItem(items[index])
        // event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/html", event?.target.parentNode);
        event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
    }

    function onDragOver(index: number) {
        const draggedOverItem = items[index];

        if (draggedItem == draggedOverItem)
            return;

        let newItems = items.filter(item => item != draggedItem);

        newItems.splice(index, 0, draggedItem);

        setItems(newItems);
    }

    function onDragEnd() {
        setDraggedItem(null);
    }

    return (
        <main className="h-screen grid place-items-center">
            <ul className="text-2xl flex flex-col gap-5">
            {items.map((item, idx) => (
                item.id != null 
                    ?
                    <li
                        key={item.id}
                        className="h-20 w-80 px-4 border-2 border-dotted flex gap-3 items-center :bg-slate-300"
                        onDragOver={() => onDragOver(idx)}
                    >
                        {idx + 1}
                        <Icon
                            name="bars"
                            className="cursor-grab"
                            draggable
                            onDragStart={e => onDragStart(e, idx)}
                            onDragEnd={onDragEnd}
                        />
                        {item.text}
                    </li>
                    :
                    <li className="h-20 w-80 bg-slate-100">

                    </li>
            ))}
            </ul>
        </main>
    )

}