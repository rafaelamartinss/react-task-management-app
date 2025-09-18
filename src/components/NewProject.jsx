import Input from "./Input";

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 px-4 py-2 rounded-md hover:bg-stone-950">Save</button></li>
            </menu>
            <div className="space-y-4">
                <Input label="Title" type="text" id="title" name="title" required />
                <Input label="Description" textarea type="text" id="description" name="description" required />
                <Input label="Due Date" type="date" id="due" name="due" required />
            </div>
        </div>
    )
}