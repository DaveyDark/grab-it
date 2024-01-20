import EditProfileForm from "@/components/forms/EditProfileForm";
import { getUserByClerkId } from "@/lib/actions/customer.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const mongoUser = await getUserByClerkId(userId);
  return (
    <div>
      <EditProfileForm clerkId={userId!} user={JSON.stringify(mongoUser)} />
    </div>
  );
};

export default Page;
