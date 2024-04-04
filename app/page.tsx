"use client"
//hooks
import { useState } from "react";
//types
import { selectCategoryBtnType, tickets_Type } from "@/types/types";
//static data
import { selectedCatigoryData } from "@/helpers/data/selected_catigory";
//components
import SelectCategoryBtn from "@/components/ui_elements/select_catigory_btn";
import GetTicketBody from "@/components/ui_elements/get_ticket_body";


export default function Home() {
  const [selectCategoryBtnValue, setSelectCategoryBtnValue] = useState<selectCategoryBtnType[]>(selectedCatigoryData)
  
  const [SelectedButton, setSelectedButton] = useState<string>("VIP Pass")


  // if you click catigory button change another bg and border
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
    <main className="max-w-[1240px] mx-auto mt-[42px] px-3 max-sm:px-6">
      <h1 className="sm:text-[32px] max-sm:text-[24px] font-semibold mb-[30px] uppercase">Choose Your Pass for Netevia conference 2024</h1>
      {/* Catigory section start */}
      <section className="mb-[53px]">
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
      {/* Catigory section and */}

      {/* Get ticket section start */}
      <GetTicketBody SelectedButton={SelectedButton} />
      {/* Get ticket section and */}
    </main>
  );
}