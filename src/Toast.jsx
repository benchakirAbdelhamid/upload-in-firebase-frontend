import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button, DatePicker,Drawer ,Modal } from 'antd';

const notify = () =>
  toast("Here is your toast.", {
    duration: 4000,
    position: "top-left",
    // Styling
    style: { background: "cyan" },
    className: "",

    // Custom Icon
    icon: "👏",
  });

const Toast = () => {

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    toast.success("Successfully created!");
    toast.error("This is an error!");
    toast.custom(<div>Hello World</div>);
    // toast.loading("Waiting...");
  }, []);
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <br />
      <br />

      <Button type="primary" onClick={() => setOpen1(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open1}
        onOk={() => setOpen1(false)}
        onCancel={() => setOpen1(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>


      <br />
      <br />
      <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
    </div>
  );
};

export default Toast;
