"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@repo/common/react-hook-form";
import { Search } from "@repo/common/lucide-react";
import { z } from "@repo/common/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~ui/components/ui/form";
import { Input } from "~ui/components/ui/input";
import { searchBarSchema } from "~web/zod-schema/search-bar";

type Props = {};

function SearchBar({}: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof searchBarSchema>>({
    resolver: zodResolver(searchBarSchema),
    defaultValues: {
      query: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof searchBarSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="ml-auto flex-1 sm:flex-initial"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
                  <Input
                    {...field}
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default SearchBar;
