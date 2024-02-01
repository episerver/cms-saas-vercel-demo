import { forwardRef, useContext } from "react";
import Button from "@/components/block/button-block";
import { HeaderContext } from "../_header";

const SecondaryMenu = forwardRef<HTMLUListElement>((props, ref) => {
  const { utilityItems } = useContext(HeaderContext);

  if (!utilityItems) return null;

  return (
    <ul ref={ref} className="flex items-center justify-end">
      {utilityItems.map(
        ({
          ContentLink: {
            navigationItem: { text, type, url, variant },
          },
        }) => (
          <li className="md:mr-6 xl:mr-12" key={text}>
            <Button buttonType={type} buttonVariant={variant} url={url}>
              {text}
            </Button>
          </li>
        )
      )}
    </ul>
  );
});

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;
