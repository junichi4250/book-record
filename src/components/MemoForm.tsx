import { Tab } from "@material-ui/core";
import { Rating, TabList } from "@material-ui/lab";
import { TabsUnstyled } from "@mui/base";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { setConstantValue } from "typescript";
import UnstyledTabsCustomized from "./UnstyledTabsCustomized";

// type SubmitData = {
//   Status: String;
//   Review: Int16Array;
//   Memo: String;
//   Date: Date;
// };

const MemoForm: React.FC = () => {
  const [starValue, setStarValue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const starStore = (starValue: React.SetStateAction<undefined>) => {
    setStarValue(starValue);
  };

  return (
    <FormWrapper>
      <div>
        <h1>登録情報の編集・削除</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>読書状況: </h4>
        <select {...register("status")}>
          <option value="readed">読んだ本</option>
          <option value="reading">読んでいる本</option>
          <option value="readStack">積読本</option>
          <option value="readFeature">読みたい本</option>
        </select>
        <UnstyledTabsCustomized />
        <h4>評価: </h4>
        <Rating
          name="simple-controlled"
          value={starValue}
          onChange={() => starStore(starValue)}
        />
        <h4>読書メモ: </h4>
        <textarea {...register("memo")} />
        <h4>登録日時: </h4>
        <input {...register("date")} />
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </FormWrapper>
  );
};

const FormWrapper: React.FC = styled.div`
  text-align: center;
`;
export default MemoForm;
