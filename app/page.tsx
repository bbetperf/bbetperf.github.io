import { Button } from "@/components/ui/button"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"


export default function Home() {
  return <div className="flex min-h-screen flex-col items-center justify-between">
    <div className="mb-4 flex max-w-[640px] min-h-screen flex-col items-center justify-between py-24 px-4">
      <div className="flex flex-col flex items-left gap-24">
        <div className="flex flex-col flex items-left gap-8 px-3">
          <div className="flex flex-col flex items-left gap-1">
            <p className="text-base text-gray-900">Maksim Anisimov. Product and Interface Designer.</p>
            <p className="text-base text-gray-500">Chicago, Illinois, United States.</p>
          </div>
          <p className="text-base text-gray-600">Crafting digital experiences at the intersection of innovative design systems, bold branding, and intuitive interfaces.</p>
        </div>
        <div className="flex flex-col flex items-left gap-5">
          <p className="text-base text-gray-900 px-3">Projects.</p>
          <div className="flex flex-col flex items-left">
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Cockpit.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Widgets.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Noque.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Musyka.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Kodomi.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Mesoki.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Noque.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </div>
        <div className="flex flex-col flex items-left gap-5">
          <p className="text-base text-gray-900 px-3">Nuggets.</p>
          <div className="flex flex-col flex items-left">
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>FUI.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Component shortcut.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </div>
        <div className="flex flex-col flex items-left gap-5">
          <p className="text-base text-gray-900 px-3">Readings.</p>
          <div className="flex flex-col flex items-left">
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Word choice is design.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Pebble 2 Duo.</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
            <Item asChild>
              <a href="#">
                <ItemContent>
                  <ItemTitle>Hello, world!</ItemTitle>
                  <ItemDescription>
                    Learn how to get started with our components.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4" />
                </ItemActions>
              </a>
            </Item>
          </div>
        </div>
      </div>
    </div>
  </div>
}