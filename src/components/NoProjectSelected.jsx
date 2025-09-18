import Button from "./Button";
import noProjectImage from "../assets/no-projects.png";


export default function NoProjectSelected({onStartAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">      
            <img src={noProjectImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-stone-500 text-xl font-bold my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>New Project</Button>
            </p>
        </div>
    )
}   