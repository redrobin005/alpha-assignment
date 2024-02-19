import { PaymentController } from "./controller/PaymentController"

export const Routes = [{
    method: "get",
    route: "/payments",
    controller: PaymentController,
    action: "all"
}, {
    method: "get",
    route: "/payments/:id",
    controller: PaymentController,
    action: "one"
}, {
    method: "get",
    route: "/filteredPayments/",
    controller: PaymentController,
    action: "filtered"
}, {
    method: "post",
    route: "/payments",
    controller: PaymentController,
    action: "save"
}]