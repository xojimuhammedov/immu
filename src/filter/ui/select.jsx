import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "../../lib/utils" // sizda bor bo'lsa qolsin

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value


const SelectTrigger = React.forwardRef(function SelectTrigger(
  { className, children, ...props },
  ref
) {
  return (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "group inline-flex h-11 w-full items-center justify-between gap-2",
        "rounded-xl border border-foreground/10 bg-background px-4 text-sm",
        "shadow-sm transition-all",
        "hover:border-foreground/20 hover:shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&>span]:line-clamp-1",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">{children}</span>

      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SelectTrigger.displayName = "SelectTrigger"


const SelectScrollUpButton = React.forwardRef(function SelectScrollUpButton(
  { className, ...props },
  ref
) {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      className={cn(
        "flex items-center justify-center py-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  )
})
SelectScrollUpButton.displayName = "SelectScrollUpButton"

const SelectScrollDownButton = React.forwardRef(function SelectScrollDownButton(
  { className, ...props },
  ref
) {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(
        "flex items-center justify-center py-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  )
})
SelectScrollDownButton.displayName = "SelectScrollDownButton"

// Content (dropdown)
const SelectContent = React.forwardRef(function SelectContent(
    { className, children, position = "popper", sideOffset = 8, ...props },
    ref
  ) {
    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          ref={ref}
          position={position}
          sideOffset={sideOffset}
          className={cn(
            "z-[9999] overflow-hidden rounded-xl border border-gray-200 bg-white",
            "shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            className
          )}
          {...props}
        >
          <SelectPrimitive.Viewport
            className={cn(
              "p-2",
              position === "popper" && "min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    )
  })
SelectContent.displayName = "SelectContent"

// Label
const SelectLabel = React.forwardRef(function SelectLabel(
  { className, ...props },
  ref
) {
  return (
    <SelectPrimitive.Label
      ref={ref}
      className={cn(
        "px-3 py-2 text-xs font-semibold tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    />
  )
})
SelectLabel.displayName = "SelectLabel"

// Item
const SelectItem = React.forwardRef(function SelectItem(
    { className, children, ...props },
    ref
  ) {
    return (
      <SelectPrimitive.Item
        ref={ref}
        className={cn(
          "relative flex w-full select-none items-center rounded-lg",
          "px-3 py-2 text-sm text-gray-900",
          "cursor-pointer outline-none",
          // HOVER / FOCUS (Radix highlight)
          "data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900",
          "focus:bg-gray-100",
          // disabled
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          className
        )}
        {...props}
      >
        {/* chap tomonda check icon */}
        <span className="mr-2 flex h-4 w-4 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <Check className="h-4 w-4 text-black" />
          </SelectPrimitive.ItemIndicator>
        </span>
  
        <SelectPrimitive.ItemText className="flex-1">
          {children}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  })
  
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef(function SelectSeparator(
  { className, ...props },
  ref
) {
  return (
    <SelectPrimitive.Separator
      ref={ref}
      className={cn("my-1 h-px bg-foreground/10", className)}
      {...props}
    />
  )
})
SelectSeparator.displayName = "SelectSeparator"

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
