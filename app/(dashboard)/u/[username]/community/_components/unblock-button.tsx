"use client"

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface UnblockButtonProps {
    userId: string;
}

export const UnBlockButton = ({
    userId,
}:UnblockButtonProps) => {
    const [isPending,startTranstion] = useTransition();

    const onClick = () => {
        startTranstion(() => {
            onUnblock(userId)
                .then((result) => toast.success(`User ${result.blocked.username} unblocked`))
                .catch(() => toast.error("Something went wrong"))
        });
    };

    return (
        <Button
            disabled={isPending}
            onClick={onClick}
            variant="link"
            size="sm"
            className="text-blue-500 w-full"
        >
            UnBlock
        </Button>
    )
}