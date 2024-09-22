import { allTools } from 'contentlayer/generated';
import { Link } from '../ui/link';
import {
  Sidebar,
  SidebarContent,
  SidebarList,
  SidebarListItem,
} from '../ui/sidebar';

export function DocsNav() {
  return (
    <Sidebar>
      <SidebarContent>
        <figure className="space-y-4">
          <figcaption className="text-lg font-semibold">
            Table of Contents
          </figcaption>
          <SidebarList className="space-y-2">
            {allTools
              .toSorted((a, b) => Number(a.priority) - Number(b.priority))
              .map((tool) => (
                <SidebarListItem key={tool._id}>
                  <Link
                    className="text-muted-foreground transition hover:underline data-[active=true]:font-medium data-[active=true]:text-foreground"
                    href={tool.url}
                  >
                    {tool.title}
                  </Link>
                </SidebarListItem>
              ))}
          </SidebarList>
        </figure>
      </SidebarContent>
    </Sidebar>
  );
}
