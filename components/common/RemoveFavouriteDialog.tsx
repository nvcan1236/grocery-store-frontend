import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "../ui/alert-dialog"
import { Button, ButtonText } from "../ui/button"
import { Heading } from "../ui/heading"
import { Text } from "../ui/text"

const RemoveFavouriteDialog = ({
  handleRemove,
  handleClose,
  show,
}: {
  show: boolean
  handleRemove: () => void
  handleClose: () => void
}) => {
  return (
    <AlertDialog isOpen={show} onClose={handleClose} size="md">
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading className="text-typography-950 font-semibold" size="md">
            Remove this item?
          </Heading>
        </AlertDialogHeader>
        <AlertDialogBody className="mt-3 mb-4">
          <Text size="sm">Please confirm if you want to proceed.</Text>
        </AlertDialogBody>
        <AlertDialogFooter className="">
          <Button
            variant="outline"
            action="secondary"
            onPress={handleClose}
            size="sm"
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            onPress={() => {
              handleRemove()
              handleClose()
            }}
            className="bg-error-600"
          >
            <ButtonText>Confirm</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default RemoveFavouriteDialog
