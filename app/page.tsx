"use client"

import SelectCategoryBtn from "@/components/ui_elements/select_catigory_btn";
import { selectCategoryBtnType } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const [selectCategoryBtnValue, setSelectCategoryBtnValue] = useState<selectCategoryBtnType[]>([
    {
      id: 1,
      isSelected: true,
      title: 'VIP Pass'
    },
    {
      id: 2,
      isSelected: false,
      title: 'General Attendees'
    },
    {
      id: 3,
      isSelected: false,
      title: 'Startup Pass'
    },
    {
      id: 4,
      isSelected: false,
      title: 'Press Pass'
    },
  ])

  const [SelectedButton, setSelectedButton] = useState<string>("VIP Pass")


  // if you click catigoyr button change another bg and border 
  function SelectedClickedHandel(title: string) {
    setSelectedButton(title)
    const updatedBtnValue = selectCategoryBtnValue.map(btn => {
      btn.isSelected = false
      return ({
        ...btn,
        isSelected: btn.title === title ? true : btn.isSelected
      })
    });
    setSelectCategoryBtnValue(updatedBtnValue);
  }

  return (
    <main className="max-w-[1240px] mx-auto mt-[42px]">
      <h1 className="sm:text-[32px] max-sm:text-[24px] font-semibold mb-[30px] uppercase">Choose Your Pass for Netevia conference 2024</h1>
      <section>
        <div className="flex flex-wrap gap-4">
          {/* This is code mapped all button  */}
          {selectCategoryBtnValue.map((values: selectCategoryBtnType) =>
            <SelectCategoryBtn
              key={values.id}
              SelectedClickedHandel={SelectedClickedHandel}
              isSelected={values.isSelected}>
              {values.title}
            </SelectCategoryBtn>)}
        </div>
      </section>
      <section>
        <div>
          
        </div>
      </section>
    </main>
  );
}