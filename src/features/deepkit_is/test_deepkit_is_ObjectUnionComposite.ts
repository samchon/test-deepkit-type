import { is } from "@deepkit/type";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectUnionComposite = _test_deepkit_is(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => is<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);