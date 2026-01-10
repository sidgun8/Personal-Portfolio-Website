import { SkillType } from "@/types/SkillType";

function SkillCard({ skill } : { skill : SkillType }) {
    return (
        <div
            className="flex md:px-4 px-2 py-[2px] md:py-0 bg-stone-100 dark:bg-neutral-900 rounded-lg border flex-row justify-start items-center"
        >
            <div className="justify-center items-center rounded-xl ">
                <img
                    className=" md:h-16 md:w-16 h-14 w-14 items-center justify-center"
                    src={`${skill.imageSrc}`} // Use the actual path to the skill image
                    alt={skill.name}
                    width={'100%'}
                    height={'100%'}
                />
            </div>

            <div className="justify-between items-center inline-flex flex-col">
                <div className=" basis-0 h-6 text-primary text-l font-medium">{skill.name}</div>
            </div>
        </div>
    );
}

export default SkillCard;