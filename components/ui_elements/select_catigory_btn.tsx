import { ReactNode } from "react";
import { Button } from "../ui/button";

type SelectCategoryBtnProps = {
    children: ReactNode;
    isSelected: boolean
    SelectedClickedHandel: Function
}

function SelectCategoryBtn({ children, isSelected, SelectedClickedHandel }: SelectCategoryBtnProps): JSX.Element {

    // if you click button changa this button border to gradient
    function changeBorder() {
        switch (children) {
            case "VIP Pass":
                return "from-cyan-500 to-blue-500"
                    case "General Attendees":
                        return "from-fuchsia-600 to-pink-600"
                            case "Startup Pass":
                                return "from-emerald-400 to-cyan-400"
                                    case "Press Pass":
                                        return "from-slate-500 to-slate-800"
                                            default:
                                                return "from-cyan-500 to-blue-500"
    }}


    return (
        <div className={isSelected ? `bg-gradient-to-r ${changeBorder()} inline-block p-[4px] rounded-[33px]` : 'border-[2px] border-black rounded-[33px]'}>
            <Button
                variant={isSelected ? 'selected' : 'unSelected'}
                onClick={() => SelectedClickedHandel(children)} >
                {children}
            </Button>
        </div>
    );
}

export default SelectCategoryBtn;