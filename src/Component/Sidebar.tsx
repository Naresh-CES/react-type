import React from 'react';

// type for array of Items
interface AnchorItems {
  name: string;
  href: string;
}

interface EnumServiceItems extends Array<AnchorItems> {}

export const Sidebar = ({ items }: { items: EnumServiceItems }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.href}>
          <a href={item.href} role='navigation'>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};
