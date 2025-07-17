import {
  Box,
  Typography,
  CardMedia,
  Button,
  Modal,
} from "@mui/material";
import contact from "../../../assets/images/contact.png";
import React, { useState } from "react";
import "./ContactUs.scss";
import ThankYou from "../../../Modal/ThankYou/ThankYou";
import * as yup from "yup";
import { MyInput } from "../../Global/MyInput/MyInput";
import { Form, Formik } from "formik";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box className="contactUsBlock">
        <CardMedia
          component="img"
          src={contact}
          title="contact us"
          className="imageContact"
        />
        <Formik
          initialValues={{
            username: "",
            email: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleOpen();
          }}
        >
          <Form className="contactInnerBlock">
            <Box className="feelFreeTextBox">
              <Typography variant="boldFourtyEightWhite">
                Feel Free to Contact us, or Just Fill in Your Details
              </Typography>
            </Box>
            <Box className="formBlock">
              <MyInput
                id="username"
                name="username"
                label="Username"
                variant="filled"
                // className="inputWidth"
              />
              <Box>
                <MyInput
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                />
              </Box>

              <MyInput
                id="phoneNumber"
                name="phoneNumber"
                label="Enter Your Mobile Number"
                variant="filled"
              />
              <Box className="sumbitButtonBox">
                <Button
                  type="submit"
                  variant="formButton"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Form>
        </Formik>
      </Box>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ThankYou />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ContactUs;
