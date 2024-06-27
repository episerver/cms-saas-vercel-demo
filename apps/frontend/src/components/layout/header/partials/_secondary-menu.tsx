import { forwardRef, useContext } from "react";
import Button from "@/components/block/button-block";
import { HeaderContext } from "../_header";
import { ThemePicker } from "./_themepicker";
import { useFragment, Schema } from '@gql'

const SecondaryMenu = forwardRef<HTMLUListElement>((props, ref) => {
  const { utilityItems } = useContext(HeaderContext);

  if (!utilityItems) return null;

  return (
    <ul ref={ref} className="flex items-center justify-end">
      <li className="md:mr-6 xl:mr-12">
        <ThemePicker />
      </li>
      {utilityItems.filter(isButtonBlock).map(
        (item) => { 
          const btn = item.__typename == "ButtonBlock" ? item as Schema.MenuButtonFragment : undefined
          if (!btn) return null
          const { text, type, url, variant } = btn
          return(
          <li className="md:mr-6 xl:mr-12" key={text}>
            <Button buttonType={type} buttonVariant={variant} url={url}>
              {text}
            </Button>
          </li>
        )}
      )}
    </ul>
  );
});

function isButtonBlock(toTest:any) : toTest is Schema.MenuButtonFragment
{
  return toTest?.__typename == "ButtonBlock"
}

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;
