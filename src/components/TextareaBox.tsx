import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type TextareaBoxProps = {
  title : string;
  name : string;
  id : string;
  placeholder ?: string;
  value ?: string | number | undefined;
  onChange : (event : React.ChangeEvent<HTMLTextAreaElement>) => void;
  required : boolean;
  rows?: number
}

export function TextareaBox({title, name, id, placeholder, value, onChange, required, rows} : TextareaBoxProps) {

  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={id}>
        {title}
        {required && <span className="ml-1 font-bold text-primary/50">*</span>}
      </Label>
      <Textarea 
        required={required} 
        name={name} 
        id={id} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        rows={rows}
    />
    </div>
  )
}