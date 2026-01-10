import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type inputBoxProps = {
  title : string;
  name : string;
  type : string;
  id : string;
  placeholder ?: string;
  value ?: string | number | undefined;
  onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
  required : boolean;
  onClick ?: () => void
}

export function InputBox({title, name, type, id, placeholder, value, onChange, required, onClick} : inputBoxProps) {

  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={id}>
        {title}
        {required && <span className="ml-1 font-bold text-primary/50">*</span>}
      </Label>
      <Input onClick={onClick} required={required} className="" name={name} type={type} id={id} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}