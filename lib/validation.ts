import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Nombre debe contener al menos 2 letras")
    .max(50, "Nombre debe contener menos de 50 letras"),
  email: z.string().email("Formato de email inválido"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Error en el numero de teléfono"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Nombre debe contener al menos 2 letras")
    .max(50, "Nombre debe contener menos de 50 letras"),
  email: z.string().email("Formato de email inválido"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Error en el numero de teléfono"),
  birthDate: z.coerce.date(),
  gender: z.enum(["hombre", "mujer", "otro"]),
  address: z
    .string()
    .min(5, "La dirección debe tener al menos 10 caracteres")
    .max(500, "La dirección debe tener menos de 500 caracteres"),
  occupation: z
    .string()
    .min(2, "Ocupación debe tener al menos 2 caracteres")
    .max(500, "Ocupación debe tener menos de 500 caracteres"),
  emergencyContactName: z
    .string()
    .min(2, "Nombre de contacto debe tener al menos 2 caracteres")
    .max(50, "Nombre de contacto debe tener menos de 500 caracteres"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Error en el numero de teléfono"
    ),
  primaryPhysician: z.string().min(2, "Debe seleccionar un profesional"),
  insuranceProvider: z
    .string()
    .min(2, "Nombre de prestador debe tener al menos 2 caracteres")
    .max(50, "Nombre de prestador debe tener menos de 500 caracteres"),
  insurancePolicyNumber: z
    .string()
    .min(2, "Número de afiliado debe tener al menos 2 caracteres")
    .max(50, "Número de afiliado debe tener menos de 50 caracteres"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debe consentir el tratamiento para proceder",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debe consentir brindar su información personal para proceder",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Debe consentir la política de privacidad para proceder",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Debe seleccionar un profesional"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "El motivo debe tener al menos 2 palabras")
    .max(500, "El motivo debe tener menos de 500 palabras"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Debe seleccionar un profesional"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Debe seleccionar un profesional"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "El motivo debe tener al menos 2 palabras")
    .max(500, "El motivo debe tener menos de 500 palabras"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
