"use client";

import { useRef } from "react";

export default function Pageclient() {
    
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="kf-btn-default"
        onClick={() => {
          dialogRef?.current?.showModal();
        }}
      >
        Show dialog
      </button>

      <dialog className="kf-dialog" ref={dialogRef}>
        <span className="kf-dialog-title">Dialog title</span>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          doloribus provident nobis quisquam tenetur odit omnis vero officia
          odio dicta?
        </p>
        <button
          type="button"
          className="kf-btn-black float-right"
          onClick={() => {
              dialogRef?.current?.close();
          }}
        >
          Submit
        </button>
        <button
          type="button"
          className="kf-btn-plain float-right me-2"
          onClick={() => {
              dialogRef?.current?.close();
          }}
          >
          Close
        </button>
      </dialog>
    </>
  );
}
