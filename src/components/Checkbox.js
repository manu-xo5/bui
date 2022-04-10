import * as React from "react";
import "./Checkbox.css";

let idCounter = 0;

/**
 *
 * @param {{
 *  containerProps: React.HTMLAttributes<HTMLDivElement>,
 *  labelProps: React.HTMLAttributes<HTMLLabelElement>,
 *  label: JSX.Element | "string"
 * } | React.HTMLAttributes<HTMLInputElement> } param0
 * @returns
 */
export default function Checkbox({
  containerProps = {},
  labelProps = {},
  label,
  ...props
}) {
  let elemId = React.useRef(++idCounter).current;

  return (
    <div
      {...containerProps}
      className={containerProps.className + " bui-checkbox"}
    >
      <input id={elemId} type="checkbox" {...props} />
      <label
        htmlFor={elemId}
        {...labelProps}
        className={labelProps.className + " bui-checkbox__label"}
      >
        {label}
      </label>
    </div>
  );
}
