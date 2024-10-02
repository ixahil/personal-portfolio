"use client";

import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";

import { SearchIcon } from "@/components/icons";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

const SearchInput = () => {
  const [input, setInput] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="cursor-pointer" variant={"ghost"}>
        <Input
          onClick={onOpen}
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm cursor-pointer",
          }}
          endContent={
            <Kbd className="hidden lg:inline-block" keys={["command"]}>
              K
            </Kbd>
          }
          onChange={(e) => setInput(e.target.value)}
          labelPlacement="outside"
          placeholder="Search node, react..."
          startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
        />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <Input
                aria-label="Search"
                classNames={{
                  inputWrapper: "bg-default-100",
                  input: "text-sm",
                }}
                endContent={
                  <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                  </Kbd>
                }
                onChange={(e) => setInput(e.target.value)}
                labelPlacement="outside"
                placeholder="Search node, react..."
                startContent={
                  <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchInput;
