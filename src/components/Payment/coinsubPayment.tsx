"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  customerName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
});

type SubscriptionFormValues = z.infer<typeof schema>;

const CoinsubSubcription: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "nurudeenrabiu18@gmail.com",
      customerName: "James White",
    },
  });

  const onSubmit = (values: SubscriptionFormValues) => {
    console.log("Form submitted:", values);

    // Create a hidden form and submit it
    const form = document.createElement("form");
    form.action = "https://dev-buy.coinsub.io/d02d2dac18";
    form.method = "POST";

    const customerDataInput = document.createElement("input");
    customerDataInput.type = "hidden";
    customerDataInput.name = "customerData";
    customerDataInput.value = JSON.stringify(values);
    form.appendChild(customerDataInput);
    document.body.appendChild(form);
    form.submit();
  };
  return (
    <div
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
      className="mt-10"
    >
      <h1 className="text-3xl">Customer Subscription Form</h1>
      <p className="mt-4 text-lg">
        Subscribe to our service using the form below:
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              {...register("email")}
              //   style={{ marginLeft: "10px", padding: "5px" }}
              className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
            />
          </label>
          {errors.email && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Customer Name Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              {...register("customerName")}
              className="border border-[#454545] placeholder:text-[#454545] bg-transparent w-full rounded-[8px] py-4 px-6 h-14"
            />
          </label>
          {errors.customerName && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.customerName.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#0085FF",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Pay with Crypto
        </button>
      </form>
    </div>
  );
};

export default CoinsubSubcription;
