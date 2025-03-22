"use client";
import * as React from 'react';
import NewPasswordFrame from './component/NewPasswordFrame';


export default function NewPasswordMainFrame() {
    return(
        <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
            <NewPasswordFrame />
        </div>
        
    )
  }
