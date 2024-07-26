import { useState, useEffect, useRef } from "react";
import { Select, message } from "antd";
import useSWR from "swr";

import { checkForCtaConflict } from "../lib/check-cta-conflit";
import { getAllClassSubjectTeacherAssociation } from "@/entities/csta/api/get-all-csta";

export const EditableCell = ({
  // title,
  editable,
  children,
  dataIndex,
  selectedClass,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  // const [messageApi, contextHolder] = message.useMessage();

  const { data } = useSWR(
    ["/api/class-timetable-csta"],
    getAllClassSubjectTeacherAssociation
  );

  const generateSelectOptions = (data) => {
    return data
      ?.filter((item) => item?.expand?.class_name?.name === selectedClass)
      ?.map((item) => {
        return {
          value: item?.teacher_name,
          label: `${item?.expand?.teacher_name?.name} - ${item?.expand?.subject_name?.name}`,
        };
      });
  };

  const showWarning = (content) => {
    message.open({
      type: "warning",
      content: content || "Conflict exists!",
    });
  };

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
  };
  const save = async (value) => {
    try {
      const { isUnique, description } = await checkForCtaConflict(
        value,
        record?.day,
        dataIndex
      );

      if (!isUnique) {
        showWarning(description);
      }
      else {}

      toggleEdit();
      handleSave({
        ...record,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <>
        {/* {contextHolder} */}
        <Select
          ref={inputRef}
          showSearch
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          popupMatchSelectWidth={false}
          onChange={save}
          onBlur={save}
          options={generateSelectOptions(data)}
          placeholder="Search CTA relation.."
        />
      </>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {/* {contextHolder} */}

        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
