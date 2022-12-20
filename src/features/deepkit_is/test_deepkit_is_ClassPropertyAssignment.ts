import { is } from "@deepkit/type";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ClassPropertyAssignment = _test_deepkit_is(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    (input) => is<ClassPropertyAssignment>(input),
    ClassPropertyAssignment.SPOILERS,
);